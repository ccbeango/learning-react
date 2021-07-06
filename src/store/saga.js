import { takeEvery, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_HOME_MULTIDATA } from './home/constants';
import { changeBannersAction, changeRecommendsAction } from './home/actionCreators';

function* fetchHomeMultidata() {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata');

  const banner = res.data.data.banner.list;
  const recommend = res.data.data.recommend.list;

  // yield put(changeBannersAction(banner));
  // yield put(changeRecommendsAction(recommend));

  yield all([
    put(changeBannersAction(banner)),
    put(changeRecommendsAction(recommend))
  ]);
}


function* mySaga() {
  // takeEvery 多个相同的action，每一个都会执行
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
  // takeLatest 多个相同的action，只会执行最后的一个，前面的都会取消
  // yield takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
}

export default mySaga;

