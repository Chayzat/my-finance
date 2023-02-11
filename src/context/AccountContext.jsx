import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";

const AccountContext = React.createContext();

export const UNCATEGORIZED_ID = "Uncategorized";

export function useAccount() {
  return useContext(AccountContext);
};

export const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useLocalStorage("accounts", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  const getAccountExpenses = (accountId) => {
    return expenses.filter((expense) => expense.accountId === accountId);
  };

  const addExpense = ({ description, amount, accountId }) => {
    setExpenses((prevExpenses) => {
      return [
        ...prevExpenses,
        { id: uuidV4(), description, amount, accountId },
      ];
    });
  };

  const addAccount = ({ name, max }) => {
    setAccounts((prevAccounts) => {
      if (prevAccounts.find((account) => account.name === name)) {
        return prevAccounts;
      }
      return [...prevAccounts, { id: uuidV4(), name, max }];
    });
  };

  const deleteAccount = ({ id }) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.map((expense) => {
        if (expense.accountId !== id) return expense;
        return { ...expense, accountId: UNCATEGORIZED_ID };
      });
    });
    setAccounts((prevAccounts) => {
      return prevAccounts.filter((account) => account.id !== id);
    });
  };

  const deleteExpenses = ({ id }) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  };

  return (
    <AccountContext.Provider
      value={{
        accounts,
        expenses,
        getAccountExpenses,
        addExpense,
        addAccount,
        deleteAccount,
        deleteExpenses,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

// export default AccountProvider;
