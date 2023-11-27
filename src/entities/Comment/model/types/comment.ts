import { User } from '@/entities/User';

export interface Comment {
  id: string;
  user: User;
  text: string;
}

export interface AddCommentFormSchema {
  text?: string;
  error?: string;
}
