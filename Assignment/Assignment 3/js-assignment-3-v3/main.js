function rekapSalesByName(data, name) {
  // TODO: answer here
}

function salesReport(data, correction) {
  let monthSales = [];
  let total = [];
  let allSales = ["Adi", "Budi", "Poltak", "Sri", "Udin"];
  // Mengelompokan sales berdasarkan nama dan total penjualan

  // cek apakah ada koreksi atau tidak
  for (let i = 0; i < correction.length; i++) {
    let newCorrect = correction[i];
    if (newCorrect.type === "koreksi") {
      for (let j = 0; j < data.length; j++) {
        if (newCorrect.salesDate === data[j].salesDate && newCorrect.salesName === data[j].salesName) {
          data[j].totalSales = newCorrect.totalSales;
        }
      }
    } else if (newCorrect.type === "tambah") {
      delete newCorrect.type;
      data.push(newCorrect);
    }
  }
  //   console.log(data);

  const nameSales = data.reduce((total, current) => {
    total[current.salesName] = total[current.salesName] || [];
    total[current.salesName].push(current.totalSales);
    monthSales.push(current.totalSales);
    return total;
  }, {});
  console.log(nameSales);

  const valueSales = Object.values(nameSales);
  const keySales = Object.keys(nameSales);
  let sumTotalSales = monthSales.reduce((total, index) => {
    return total + index;
  });
  console.log(sumTotalSales);

  //Menjumlahkan penjualan seluruh sales
  for (let i = 0; i < valueSales.length; i++) {
    let sumValues = valueSales[i].reduce((total, index) => {
      return total + index;
    });

    total.push({
      [keySales[i]]: sumValues,
    });
  }

  let arrName = [];
  for (let i = 0; i < total.length; i++) {
    const totalValue = Object.keys(total[i]);
    arrName.push(...totalValue);
  }

  // Menambahkan Nama yang tidak ada pada inputan
  let filterName = allSales.filter((element) => {
    return !arrName.includes(element);
  });
  for (let i = 0; i < filterName.length; i++) {
    total.push({
      [filterName[i]]: 0,
    });
  }

  // Mengurutkan Nama Sesuai Abjad
  let sortName = Object.assign({}, ...total);
  const orderedName = Object.keys(sortName)
    .sort()
    .reduce((obj, key) => {
      obj[key] = sortName[key];
      return obj;
    }, {});

  // Search Penjualan Terbanyak
  let totalValues = Object.values(orderedName);
  let maxTotal = Math.max(...totalValues);

  // Search Nama Sales Penjualan Terbanyak
  let nameSalesWin = Object.keys(orderedName).reduce((a, b) => {
    return orderedName[a] > orderedName[b] ? a : b;
  });

  // Last Objek Result
  let resultObj = {
    monthlySales: sumTotalSales,
    totalSalesByName: orderedName,
    bestSalesman: `Penjualan terbanyak dilakukan oleh ${nameSalesWin} dengan total penjualan dalam 1 bulan sebesar ${maxTotal}`,
  };
  return resultObj;
}
data = [
  {
    salesName: "Udin",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Poltak",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Poltak",
    totalSales: 50,
    salesDate: 2,
  },
  {
    salesName: "Adi",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Sri",
    totalSales: 100,
    salesDate: 1,
  },
];
correction = [
  {
    type: "tambah",
    salesName: "Udin",
    totalSales: 100,
    salesDate: 2,
  },
  {
    type: "tambah",
    salesName: "Adi",
    totalSales: 50,
    salesDate: 2,
  },
];
data1 = [
  {
    salesName: "Udin",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Poltak",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Poltak",
    totalSales: 50,
    salesDate: 2,
  },
];
correction1 = [
  {
    type: "tambah",
    salesName: "Udin",
    totalSales: 100,
    salesDate: 2,
  },
  {
    type: "koreksi",
    salesName: "Udin",
    totalSales: 20,
    salesDate: 2,
  },
  {
    type: "tambah",
    salesName: "Adi",
    totalSales: 50,
    salesDate: 2,
  },
  {
    type: "koreksi",
    salesName: "Adi",
    totalSales: 10,
    salesDate: 2,
  },
];

console.log(salesReport(data1, correction1));
console.log(salesReport(data, correction));
module.exports = {
  salesReport,
};
