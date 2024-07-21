import { Box, Grid, GridItem, Input, Select } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { MyPresentMessage } from '@/components/features/Order/MyPresentMessage';
import { PresentList } from '@/components/features/Order/\bPresentList';

export const OrderPage = () => {
  const location = useLocation();
  const { control, watch, register, handleSubmit } = useForm();

  const check = watch('check');

  const handleOnCheck = () => {
    alert('주문이 완료되었습니다.');
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handleOnCheck)}>
        <Grid
          h="100%"
          w="100%"
          templateRows={{ base: 'repeat(3, 0.5fr)', md: 'repeat(2, 1fr)' }}
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={4}
          maxWidth={1200}
        >
          <GridItem rowSpan={2} colSpan={2}>
            <MyPresentMessage register={register} />
            <PresentList
              imageURL={location.state.productData.imageURL}
              brandInfoName={location.state.productData.brandInfoName}
              itemCount={location.state.itemCount}
              name={location.state.productData.name}
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={1} justifyContent={'center'} display={'flex'}>
            <Box
              h="100%"
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection={'column'}
              gap={1}
              marginTop={10}
            >
              <PayWrapper>결제 정보</PayWrapper>
              <PayWrapperNoBorder>
                <Controller
                  name="check"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      isChecked={field.value}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        field.onChange(checked);
                      }}
                    >
                      현금영수증 신청
                    </Checkbox>
                  )}
                />
                <Select>
                  <option value="option1">개인 소득 공제</option>
                  <option value="option2">사업자 증빙용</option>
                </Select>
                <Input
                  placeholder="(-없이) 숫자만 입력해주세요."
                  {...register('number', {
                    validate: (value) => {
                      if (check && !value) {
                        alert('현금 영수증 번호를 입력해주세요.');
                        return false;
                      }
                      if (value && isNaN(Number(value))) {
                        alert('현금 영수증 번호는 숫자만 입력해주세요');
                        return false;
                      }
                      return true;
                    },
                  })}
                ></Input>
              </PayWrapperNoBorder>
              <PayWrapperBorder>최종 결제 금액 {location.state.totalPrice} 원</PayWrapperBorder>
              <PayButton type="submit">{location.state.totalPrice} 원 결제하기</PayButton>
            </Box>
          </GridItem>
        </Grid>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const PayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid;
  width: 80%;
  padding-bottom: 10px;
  gap: 10px;
  padding-top: 10px;
  margin-bottom: 10px;
`;

const PayWrapperBorder = styled(PayWrapper)`
  border-bottom: 1px solid;
  border-top: 1px solid;
  margin-bottom: 20px;
`;

const PayWrapperNoBorder = styled(PayWrapper)`
  border: inherit;
`;

const PayButton = styled(Button)`
  padding-left: 20px;
  max-width: 80%;
`;
