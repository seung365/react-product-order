import { Box, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

type MyPresentMessageProps = {
  register: UseFormRegister<FieldValues>;
};

export const MyPresentMessage = ({ register }: MyPresentMessageProps) => {
  return (
    <LetterBox>
      <div>나에게 주는 선물</div>
      <Input
        backgroundColor={'lightgray'}
        placeholder="선물과 함께 보낼 메시지를 적어보세요"
        height="30%"
        width="80%"
        {...register('message', {
          validate: (value) => {
            if (!value) {
              alert('메시지를 입력해주세요');
              return false;
            }
            if (value.length > 100) {
              alert('메시지는 100자 이내로 입력해주세요.');
              return false;
            }
            return true;
          },
        })}
      ></Input>
    </LetterBox>
  );
};

const LetterBox = styled(Box)`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;
