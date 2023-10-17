(function () {
  lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // 애니메이션을 보여줄 div 요소
    renderer: 'svg', // 렌더링 방식 (canvas 또는 svg)
    loop: true, // 애니메이션을 반복할지 여부
    autoplay: true, // 자동 재생할지 여부
    path: './a.json', // Lottie JSON 파일의 경로
  });

  function makeCircle() {
    fetch('./a.json')
      .then((response) => {
        return response.json();
      })
      .then(async (json) => {
        json['layers'].push({
          ddd: 0,
          ind: 7,
          ty: 2,
          nm: 'circles2',
          refId: 'image_circle',
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [427, 296, 0], ix: 2 },
            a: { a: 0, k: [-1007, -2296, 0], ix: 1 },
            s: { a: 0, k: [5, 5, 100], ix: 6 },
          },
          ao: 0,
          ip: 0,
          op: 60,
          st: 0,
          bm: 0,
        });

        const data = json;

        lottie.destroy();

        lottie.loadAnimation({
          container: document.getElementById('lottie-animation'), // 애니메이션을 보여줄 div 요소
          renderer: 'svg', // 렌더링 방식 (canvas 또는 svg)
          loop: true, // 애니메이션을 반복할지 여부
          autoplay: true, // 자동 재생할지 여부
          animationData: data,
        });
      });
  }

  function deleteCircle() {
    fetch('./a.json')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json['layers']);
        json['layers'].forEach((layer, idx) => {
          if (layer['nm'] === 'circles2') {
            json['layers'].splice(idx, idx);
          }
        });

        lottie.destroy();

        lottie.loadAnimation({
          container: document.getElementById('lottie-animation'), // 애니메이션을 보여줄 div 요소
          renderer: 'svg', // 렌더링 방식 (canvas 또는 svg)
          loop: true, // 애니메이션을 반복할지 여부
          autoplay: true, // 자동 재생할지 여부
          animationData: json,
        });
      });
  }

  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', makeCircle);

  const deleteBtn = document.getElementById('delete-btn');
  deleteBtn.addEventListener('click', deleteCircle);
})();
