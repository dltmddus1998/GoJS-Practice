(function () {
  lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // 애니메이션을 보여줄 div 요소
    renderer: 'svg', // 렌더링 방식 (canvas 또는 svg)
    loop: true, // 애니메이션을 반복할지 여부
    autoplay: true, // 자동 재생할지 여부
    path: './a.json', // Lottie JSON 파일의 경로
  });

  function addPin() {
    fetch('./a.json')
      .then((response) => response.json())
      .then((json) => {
        json['layers'].unshift({
          ty: 4,
          nm: 'pin3',
          ip: 0,
          st: 0,
          ind: 3,
          hix: 3,
          ks: {
            o: { a: 0, k: 100 },
            or: { a: 0, k: [0, 0, 0] },
            a: { a: 0, k: [-440, -459, 0] },
            p: {
              s: true,
              x: { a: 0, k: 50 },
              y: {
                a: 1,
                k: [
                  { t: 0, s: [43], e: [50], i: { x: [0.515], y: [0.955] }, o: { x: [0.455], y: [0.03] } },
                  { t: 30, s: [50], e: [43], i: { x: [0.515], y: [0.955] }, o: { x: [0.455], y: [0.03] } },
                  { t: 60 },
                ],
              },
            },
            rx: { a: 0, k: 0 },
            ry: { a: 0, k: 0 },
            rz: { a: 0, k: 0 },
            s: { a: 0, k: [50, 50, 100] },
          },
          shapes: [
            {
              ty: 'gr',
              nm: 'pin shape group',
              it: [
                {
                  ty: 'sh',
                  ks: {
                    a: 0,
                    k: {
                      c: true,
                      v: [
                        [50.1094, 13],
                        [29, 34.1094],
                        [31.9531, 44.9375],
                        [50.1094, 69],
                        [68.2656, 44.9375],
                        [71.2187, 34.1094],
                      ],
                      i: [
                        [11.658299999999997, 0],
                        [0, -11.6584],
                        [-2.1899999999999977, -2.9024],
                        [-1.1094000000000008, 0],
                        [0, 0],
                        [0, 3.531500000000001],
                      ],
                      o: [
                        [-11.6584, 0],
                        [0, 3.8988000000000014],
                        [0, 0],
                        [1.1094000000000008, 0],
                        [1.9891999999999967, -2.6362000000000023],
                        [0.00010000000000331966, -11.6584],
                      ],
                    },
                  },
                },
                {
                  ty: 'sh',
                  ks: {
                    a: 0,
                    k: {
                      c: true,
                      v: [
                        [50.1094, 25.2261],
                        [58.9927, 34.1093],
                        [50.1094, 42.9927],
                        [41.2261, 34.1094],
                      ],
                      i: [
                        [-4.9054, 0],
                        [0, -4.905299999999997],
                        [4.9054, 0],
                        [0, 4.9054],
                      ],
                      o: [
                        [4.9054, 0],
                        [0, 4.9055000000000035],
                        [-4.9054, 0],
                        [0, -4.9054],
                      ],
                    },
                  },
                },
                { ty: 'st', o: { a: 0, k: 0 }, w: { a: 0, k: 0 }, c: { a: 0, k: [0, 0, 0, 0] }, lc: 3, lj: 1, ml: 1 },
                { ty: 'fl', o: { a: 0, k: 100 }, r: 1, c: { a: 0, k: [0.8509803921568627, 0.3254901960784314, 0.30196078431372547, 1] } },
                {
                  ty: 'tr',
                  o: { a: 0, k: 100 },
                  a: { a: 0, k: [0, 0] },
                  s: { a: 0, k: [100, 100] },
                  p: { a: 0, k: [0, 0] },
                  r: { a: 0, k: 0 },
                },
              ],
            },
          ],
          op: 90,
        });

        const data = json;

        console.log(data);

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

  function deletePin() {
    fetch('./a.json')
      .then((response) => response.json())
      .then((json) => {
        json['layers'].forEach((layer, idx) => {
          if (layer['nm'] === 'pin3') {
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

  const addPinBtn = document.getElementById('add-pin');
  addPinBtn.addEventListener('click', addPin);

  const deletePinBtn = document.getElementById('delete-pin');
  deletePinBtn.addEventListener('click', deletePin);
})();
