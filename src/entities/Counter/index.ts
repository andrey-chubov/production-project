import type { CounterShema } from './model/types/counterSchema';
import { Counter } from './ui/Counter';
import { counterReducer } from './model/slice/counterSlice';

export { CounterShema, Counter, counterReducer };
