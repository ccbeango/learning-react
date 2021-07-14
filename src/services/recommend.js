import request from './request';

export function getTopBanners() {
  return request({
    url: "/banner"
  });
}

export function getHotRecommneds(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  });
}