(function () {})();
fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    const regionId = json['region-id'];
    const regionName = json['region-name'];

    const regionIdTxt = document.getElementById('region-id');
    regionIdTxt.innerText = regionId;

    const regionNameTxt = document.getElementById('region-name');
    regionNameTxt.innerText = regionName;

    // console.log(json['vpc']);

    /**
     * Object.keys(json['vpc']) 배열의 길이만큼 vpc 개수 표시.
     *
     * vpc-region${n}
     */

    // console.log(Object.keys(json['vpc']).length);

    const vpcCnt = Object.keys(json['vpc']).length;

    while (vpcCnt > 0) {
      /**
       * TODO: vpc 개수 만큼 데이터 뽑기
       */
      // console.log(json['vpc'][`vpc-region${vpcCnt}`]);
      vpcCnt--;
      console.log(vpcCnt);
    }
  });
