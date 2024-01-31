/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import { FlexProps } from '@/shared/ui/Stack/Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;
export const getHstack = (props: HStackProps) => {
  Object.entries(props).map((item) => {
    `.${item[0]} {
			${item[0]}: ${item[1]};
		}`;
  });
};
