import React from 'react';
import styled from 'styled-components';

const TransactionTypeSelector = ({
  transactionType,
  setTransactionType,
  price,
  setPrice,
  formatPriceInput,
}) => {
  const formattedPrice =
    price > 0
      ? `₩ ${price.toLocaleString()}`
      : '';

  return (
    <Transaction>
      <div>
        <SellButton
          type="button"
          selected={
            transactionType === '판매하기'
          }
          onClick={() =>
            setTransactionType('판매하기')
          }
        >
          판매하기
        </SellButton>
        <SellButton
          type="button"
          selected={
            transactionType === '나눔하기'
          }
          onClick={() => {
            setTransactionType('나눔하기');
            setPrice(0);
          }}
        >
          나눔하기
        </SellButton>
      </div>
      <Input
        placeholder="₩ 가격을 입력해 주세요."
        value={formattedPrice}
        onChange={(e) =>
          setPrice(
            formatPriceInput(e.target.value),
          )
        }
        disabled={transactionType === '나눔하기'}
      />
    </Transaction>
  );
};

export default TransactionTypeSelector;

const Transaction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SellButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 16px;
  border-radius: 30px;
  color: ${({ selected }) =>
    selected ? '#fff' : '#000'};
  background-color: ${({ selected }) =>
    selected ? '#4d4d4d' : '#fff'};
  border: ${({ selected }) =>
    selected ? 'none' : '1px solid #4d4d4d'};
  &:first-child {
    margin: 10px 10px 20px 0;
  }
  &:hover {
    background-color: #2d2d2d;
    color: #eee;
  }
`;

const Input = styled.input`
  font-size: 16px;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${({ disabled }) =>
    disabled ? '#bbbbbb' : '#fff'};
`;
