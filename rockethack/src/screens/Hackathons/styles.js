import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Empty = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  color: rgba(255, 255, 255, 0.2);
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollInicator: false,
})`
  padding: 20px;
  margin-top: 30px;
`;
