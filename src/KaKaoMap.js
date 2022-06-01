import React, { useEffect } from 'react';

const { kakao } = window;

const KaKaoMap = () => {

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(35.20198489, 129.085823),
      level: 5
    };
    // 지도를 생성합니다.
    const map = new kakao.maps.Map(container, options);
    var 데이터 = [
		[35.20198489, 129.085823,'<div style="width:150px;color:black;text-align:center;padding:6px 0;>리안한의원</div>'],
		[35.21933436, 129.0836176,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">해은한의원</div>'],
		[35.21727206, 129.0843391,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">동래장천한의원</div>'],
		[35.21106311, 129.0824144,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">가촌한의원</div>'],
		[35.19791554, 129.059595,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">이승하한의원</div>'],
		[35.20510891, 129.077622,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">동래한의원</div>'],
		[35.2035679, 129.0833454,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">명륜한의원</div>'],
		[35.22090039, 129.0829964,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">동의당한의원</div>'],
		[35.20211076, 129.084711,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">느티나무한의원</div>'],
		[35.20617157, 129.0758767,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">소나무한의원</div>'],
		[35.19875736, 129.0606234,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">상현한의원</div>'],
		[35.20626236, 129.0763066,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">365늘봄한의원</div>'],
		[35.20593924, 129.0841176,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">가온자리한의원</div>'],
		[35.19858037, 129.0649659,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">세정당한의원</div>'],
		[35.2061334, 129.0674659,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">사직365부부한의원</div>'],
		[35.2061334, 129.0674358,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">열린한의원</div>'],
		[35.20238753, 129.0886618,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">더아름다운한의원</div>'],
		[35.20779342, 129.0820539,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">용한의원</div>'],
		[35.21145212, 129.0769398,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">행림한의원</div>'],
		[35.2197477, 129.0818882,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">정상한의원</div>'],
		[35.20198489, 129.085823,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">유당한의원</div>'],
		[35.21465112, 129.0771636,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">삼대경한의원</div>'],
		[35.19698814, 129.1055264,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">조은한의원</div>'],
		[35.19905862, 129.0604848,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">경희으뜸한의원</div>'],
		[35.1989077, 129.0600106,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">다산미즈한의원</div>'],
		[35.21072681, 129.0835031,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">동래사암한의원</div>'],
		[35.20443231, 129.0672252,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">영진한의원</div>'],
		[35.2223686, 129.0847648,'<div style="width:150px;color:black;text-align:center;padding:6px 0;">사직도원한의원</div>']

		
	 ];

     for(var i=0; i< 데이터.length; i++){
        var marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(데이터[i][0], 데이터[i][1]), // 마커의 좌표
            map: map // 마커를 표시할 지도 객체
        });
        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
            content: 데이터[i][2]
          });
          infowindow.open(map, marker);
     }

        // var coords = new kakao.maps.LatLng(35.20198489, 129.085823);
  
        // // 결과값으로 받은 위치를 마커로 표시합니다
        // var marker = new kakao.maps.Marker({
        //   map: map,
        //   position: coords
        // });
  
        
        
  
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        // map.setCenter(coords);
  }, []);

  return (
    <div id='myMap' style={{
      width: '100%', 
      height: '100vh'
    }}></div>
  );
}

export default KaKaoMap;