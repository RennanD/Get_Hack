import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 60px 0 30px;
`;

export const Subscription = styled.TouchableOpacity`
  margin-left: 20px;
  padding: 0 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  background: #222;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Left = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Thumbnail = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 7px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #fefefe;
  font-weight: bold;
`;

export const Date = styled.Text`
  color: #eee;
  font-size: 13px;
  margin-top: 4px;
`;
