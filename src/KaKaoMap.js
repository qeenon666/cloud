import React, { useEffect, useState } from "react";
import axios from 'axios';

const { kakao } = window;

const KakaoMap = () => {

  const [data, setData] = useState({data:[]});

  useEffect(() => {
    axios.get('https://api.odcloud.kr/api/15045206/v1/uddi:c4b227fa-3961-4de0-904f-a8a70e0fc065_201905131336?page=1&perPage=50&returnType=json&serviceKey=la%2Fo6BjIs1pkSiUuG3RtEvlfhb14ZFsXDmdrbeRuTeD400rgHQROP5Qu7OoK18WJ%2FeV1kS9SRkS8NDPRrMXOJQ%3D%3D')
    .then(reponse => {
      setData(reponse.data);});
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(35.1050000902067,129.019058916124),
      level:5
    };
    var geocoder = new kakao.maps.services.Geocoder();

    // 지도를 생성합니다.
    const map = new kakao.maps.Map(container, options);
    const ab = data.data.map(data => {return `${data.소재지주소}`})
    const ac = data.data.map(data => {return `${data.사업장명}`})
    // const ac = data.data.map(data => {return `${data.위도}`})
    // const ad = data.data.map(data => {return `${data.경도}`})
    console.log(ab);
    console.log(ac);

    data.data.forEach(function(data, index){
      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(data.소재지주소, function(result, status) {
          // 정상적으로 검색이 완료됐으면 
           if (status === kakao.maps.services.Status.OK) {
      
              var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
              
              // 결과값으로 받은 위치를 마커로 표시합니다
              var marker = new kakao.maps.Marker({
                  map: map,
                  position: coords
              });
              // console.log(result[0].x)
      
              // 인포윈도우로 장소에 대한 설명을 표시합니다
              var infowindow = new kakao.maps.InfoWindow({
                  content: ac[index]
              });
              infowindow.open(map, marker);
          } 
      });
  }); 
  }, [data.currentCount]);

  
  return (
    <div id='myMap' style={{
      width: '100%', 
      height: '100vh',
      color:'black'
    }}></div>
  );
}
export default KakaoMap;