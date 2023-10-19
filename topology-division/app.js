// (function () {
//   fetch('./data.json')
//     .then((response) => response.json())
//     .then((json) => {
//       const regionId = json['region-id'];
//       const regionName = json['region-name'];

//       const regionIdTxt = document.getElementById('region-id');
//       regionIdTxt.innerText = regionId;

//       const regionNameTxt = document.getElementById('region-name');
//       regionNameTxt.innerText = regionName;

//       // console.log(json['vpc']);

//       /**
//        * Object.keys(json['vpc']) 배열의 길이만큼 vpc 개수 표시.
//        *
//        * vpc-region${n}
//        */

//       // console.log(Object.keys(json['vpc']).length);

//       let vpcCnt = Object.keys(json['vpc']).length;

//       const vpcIpZone = [],
//         vpcIpArea = [],
//         vpcInfoList = [];

//       while (vpcCnt > 0) {
//         /**
//          * TODO: vpc 개수 만큼 데이터 뽑기
//          */
//         vpcIpZone.push(`vpc-${json['region-name'].toLowerCase()}${vpcCnt}`);
//         vpcIpArea.push(json['vpc'][`vpc-region${vpcCnt}`]['vpcIpArea']);
//         vpcInfoList.push(json['vpc'][`vpc-region${vpcCnt}`]);
//         vpcCnt--;
//       }

//       for (let i = Object.keys(json['vpc']).length - 1; i >= 0; i--) {
//         const titleDiv = document.createElement('div');

//         titleDiv.textContent = `${vpcIpZone[i]} ${vpcIpArea[i]}`;
//         titleDiv.className = 'topology-cont-vpc';
//         titleDiv.style.margin = '2.4rem 1.2rem';

//         document.querySelector('.topology-cont').appendChild(titleDiv);
//       }

//       for (let i = Object.keys(json['vpc']).length - 1; i >= 0; i--) {
//         const listDiv = document.createElement('div');

//         document.querySelector('.topology-cont-vpc').appendChild(listDiv);
//       }
//     });
// })();
