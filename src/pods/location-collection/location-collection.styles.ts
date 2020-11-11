import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  & > :nth-child(n + 2) {
    margin-top: 2rem;
  }
`;

export const list = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const search = css`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

export const searchInput = css`
  width: 100%;
  margin-right: 24px;
`;

export const pagination = css`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

