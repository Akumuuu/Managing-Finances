import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ExpensesGroup } from '../types/expenses-group';
import { ExpenseRow } from './ExpenseRow';
import { theme } from '../theme';

type Props = {
  groups: ExpensesGroup[];
};
export const ExpensesList = ({ groups }: Props) => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'scroll',
      paddingHorizontal: 16,
      width: '100%',
      paddingTop: 16,
    }}
  >
    <View
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
      }}
    >
      <Text style={{ color: theme.colors.text, fontSize: 17 }}>Total for:</Text>
      <TouchableOpacity style={{ marginLeft: 16 }}>
        <Text style={{ color: theme.colors.primary, fontSize: 17 }}>
          This week
        </Text>
      </TouchableOpacity>
    </View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 16,
      }}
    >
      <Text
        style={{
          color: theme.colors.textSecondary,
          fontSize: 17,
          marginTop: 2,
        }}
      >
        $
      </Text>
      <Text
        style={{
          color: theme.colors.text,
          fontSize: 40,
          fontWeight: '600',
          marginTop: 2,
        }}
      >
        195
      </Text>
    </View>
    {groups.map(({ day, expenses, total }) => (
      <View
        key={day}
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 24,
        }}
      >
        <Text
          style={{
            marginBottom: 4,
            color: theme.colors.textSecondary,
            fontSize: 17,
            fontWeight: '600',
          }}
        >
          {day}
        </Text>
        <View
          style={{
            borderBlockColor: theme.colors.border,
            borderBottomWidth: 2,
            marginBottom: 8,
          }}
        />
        {expenses.map((expense) => (
          <ExpenseRow key={expense.id} expense={expense} />
        ))}
        <View
          style={{
            borderBlockColor: theme.colors.border,
            borderBottomWidth: 2,
            marginBottom: 12,
          }}
        />
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: theme.colors.text,
            }}
          >
            Total:
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: theme.colors.textSecondary,
              fontWeight: '600',
            }}
          >
            USD {total}
          </Text>
        </View>
      </View>
    ))}
  </View>
);
