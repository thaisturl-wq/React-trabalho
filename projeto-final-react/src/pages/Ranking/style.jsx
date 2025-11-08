import styled, { css } from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  background-color: #1a1a2e;
  min-height: 100vh;
  width: 100%;
`

export const RankingContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3rem 1rem;
  max-width: 800px;
  margin: 0 auto;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2.2rem;
  font-weight: 700;
  color: #f1f5f9;
  letter-spacing: 0.5px;
`

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`

export const UserCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1e293b;
  padding: 1.2rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #334155;
    transform: scale(1.02);
  }

  ${({ index }) =>
    index === 0 &&
    css`
      background: linear-gradient(135deg, #facc15 0%, #eab308 40%, #fef08a 100%);
      color: #0f172a;
      transform: scale(1.03);
      &:hover {
        background: linear-gradient(135deg, #fde047 0%, #facc15 50%, #fef08a 100%);
      }
    `}
`

export const Posicao = styled.span`
  font-weight: 700;
  width: 45px;
  text-align: center;
  font-size: 1.2rem;
  color: ${({ index }) =>
    index === 0
      ? '#0f172a'
      : index === 1
      ? '#94a3b8'
      : index === 2
      ? '#a78bfa'
      : '#94a3b8'};
`

export const Foto = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 3px solid
    ${({ index }) =>
      index === 0 ? '#facc15' : index === 1 ? '#94a3b8' : index === 2 ? '#a78bfa' : '#38bdf8'};
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`

export const Nome = styled.span`
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: inherit;
`

export const Pontos = styled.span`
  color: ${({ index }) => (index === 0 ? '#0f172a' : '#22c55e')};
  font-weight: 600;
  font-size: 0.95rem;
`

export const ResponsiveCard = styled(UserCard)`
  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
`
