const obj = {
  isSuccess: true,
  content: {
    goodsId: 1695
  }
};
const {
  isSuccess,
  content: {
    goodsId
  } = {}
} = obj;