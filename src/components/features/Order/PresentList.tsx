import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { Image } from '@/components/common/Image';

interface LocationState {
  imageURL: string;
  brandInfoName: string;
  itemCount: number;
  name: string;
}

export const PresentList = ({ imageURL, brandInfoName, itemCount, name }: LocationState) => {
  return (
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
          <Image width="150px" src={imageURL} />
          <Box flexDirection={'column'}>
            <div style={{ fontWeight: 'lighter' }}>{brandInfoName}</div>
            <div>
              {name} x {itemCount}개
            </div>
          </Box>
        </div>
      </Box>
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  height: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  border-top: 10px solid rgb(237, 237, 237);
`;
