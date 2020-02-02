export interface IPizza {
  cheese?: boolean;
  mushroom?: boolean;
  pineApple?: boolean;
  seafood?: boolean;
  bacon?: boolean;
}

export class Pizza implements IPizza {}