requirejs(['./MOCK_DATA'], function (importedData) {
  const orderedData = importedData.data.sort((a, b) => (a.sku > b.sku ? 1 : b.sku > a.sku ? -1 : 0));
  const output = document.getElementById('output');

  const straightClickHandler = () => {
    let startTime = performance.now();
    let input = document.getElementById('searchbox').value.toLowerCase();
    if (!input) return;
    let linearResult = '';
    for (let i = 0; i < orderedData.length; i++) {
      if (orderedData[i].sku === input) {
        linearResult = orderedData[i];
      }
    }
    if (!linearResult) return;
    output.innerText = `Name: ${linearResult.name} \n
    Pack: ${linearResult.pack} \n
    Price: ${linearResult.price} \n
    Sku: ${linearResult.sku}`;
    let endTime = performance.now();
    console.log(
      `Straight search for item with index ${orderedData.findIndex((x) => x.sku === input)} took ${
        endTime - startTime
      } milliseconds.`,
    );
  };

  const binaryClickHandler = () => {
    let startTime = performance.now();
    let input = document.getElementById('searchbox').value.toLowerCase();
    if (!input) return;
    let middlePoint = orderedData[Math.floor(orderedData.length / 2)];
    let binaryResult = '';
    if (input < middlePoint.sku) {
      for (let i = 0; i < Math.floor(orderedData.length / 2); i++) {
        if (orderedData[i].sku === input) {
          binaryResult = orderedData[i];
        }
      }
    } else if (input > middlePoint.sku) {
      for (let i = Math.floor(orderedData.length / 2 + 1); i < orderedData.length; i++) {
        if (orderedData[i].sku === input) {
          binaryResult = orderedData[i];
        }
      }
    } else if (input === middlePoint.sku) {
      binaryResult = middlePoint;
    }
    if (!binaryResult) return;
    output.innerText = `Name: ${binaryResult.name} \n
    Pack: ${binaryResult.pack} \n
    Price: ${binaryResult.price} \n
    Sku: ${binaryResult.sku}`;
    let endTime = performance.now();
    console.log(
      `Binary search for item with index ${orderedData.findIndex((x) => x.sku === input)} took ${
        endTime - startTime
      } milliseconds.`,
    );
  };

  document.getElementById('straight-search-btn').addEventListener('click', straightClickHandler);
  document.getElementById('binary-search-btn').addEventListener('click', binaryClickHandler);
});
