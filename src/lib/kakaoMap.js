const { kakao } = window;

export const KakaoMapScript = (address) => {
  const container = document.getElementById('kakaoMap');
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };

  const map = new kakao.maps.Map(container, options);

  const geocoder = new kakao.maps.services.Geocoder();
  geocoder.addressSearch(address, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      const marker = new kakao.maps.Marker({
        map: map,
        position: coords,
      });
      map.setCenter(coords);
    }
  });

  container.style.width = '300px';
  container.style.height = '300px';
  map.relayout();
};
