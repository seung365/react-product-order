import { Box, Grid, GridItem, Input, Select } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { Image } from '@/components/common/Image';

export const OrderPage = () => {
  const location = useLocation();
  const [check, setCheck] = useState(false);

  const numberRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
  };

  const hadleFinish = () => {
    const number = numberRef.current?.value;
    const message = messageRef.current?.value;

    if (check) {
      if (number && message) {
        if (!Number.isNaN(number as string)) {
          alert('현금 영수증 번호는 숫자만 입력해주세요');
        } else {
          alert('주문이 완료되었습니다.');
        }
      } else if (!number) {
        alert('현금 영수증 번호를 입력해주세요');
      } else if (!message) {
        alert('메시지를 입력해주세요');
      }
    } else {
      if (message) {
        alert('주문이 완료되었습니다.');
      } else if (!message) {
        alert('메시지를 입력해주세요');
      }
    }
  };

  return (
    <Wrapper>
      <Grid
        h="100%"
        w="100%"
        templateRows={{ base: 'repeat(3, 0.5fr)', md: 'repeat(2, 1fr)' }}
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={4}
        maxWidth={1200}
      >
        <GridItem rowSpan={2} colSpan={2}>
          <LetterBox>
            <div>나에게 주는 선물</div>
            <Input
              backgroundColor={'lightgray'}
              placeholder="선물과 함께 보낼 메시지를 적어보세요"
              height="30%"
              width="80%"
              ref={messageRef}
            ></Input>
          </LetterBox>
          <StyledBox>
            <Box flexDirection={'column'} padding={10} gap={10}>
              <div style={{ fontWeight: 'bold', marginBottom: 20 }}>선물 내역</div>
              <div
                style={{
                  border: '1px solid lightgray',
                  borderRadius: 8,
                  padding: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 10,
                }}
              >
                <Image width="150px" src={location.state.data.imageURL} />
                <Box flexDirection={'column'}>
                  <div style={{ fontWeight: 'lighter' }}>{location.state.data.brandInfo.name}</div>
                  <div>
                    {location.state.data.name} x {location.state.itemCount}개
                  </div>
                </Box>
              </div>
            </Box>
          </StyledBox>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} justifyContent={'center'} display={'flex'}>
          <Box
            h="100%"
            w="80%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection={'column'}
            gap={1}
          >
            <PayWrapper>결제 정보</PayWrapper>
            <PayWrapperNoBorder>
              <Checkbox onChange={handleCheck}>현금영수증 신청</Checkbox>
              <Select>
                <option value="option1">개인 소득 공제</option>
                <option value="option2">사업자 증빙용</option>
              </Select>
              <Input placeholder="(-없이) 숫자만 입력해주세요." ref={numberRef}></Input>
            </PayWrapperNoBorder>
            <PayWrapperBorder>최종 결제 금액 {location.state.totalPrice} 원</PayWrapperBorder>
            <PayButton onClick={hadleFinish}>{location.state.totalPrice} 원 결제하기</PayButton>
          </Box>
        </GridItem>
      </Grid>
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

const LetterBox = styled(Box)`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

const StyledBox = styled(Box)`
  height: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  border-top: 10px solid rgb(237, 237, 237);
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
