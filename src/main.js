(function () {
  let products = [
    {
      id: "pd",
      name: "Plumbing & Drain Cover",
      decoration: "pipe-and-drain",
      displayPrice: {
        monthly: "99p",
        annual: `£${(0.99 * 12).toFixed(2)}`,
      },
      price: {
        monthly: 0.99,
        annual: 0.99 * 12,
      },
      excess: "£60",
      selected: true,
      disabled: "disabled",
    },
    {
      id: "bdobc",
      name: "Boiler Breakdown Cover",
      decoration: "boiler-repair",
      displayPrice: {
        monthly: "£1.00",
        annual: `£12.00`,
      },
      price: {
        monthly: 1,
        annual: 12,
      },
      excess: "£99",
      selected: false,
      disabled: false,
    },
    {
      id: "hec",
      name: "Home Electrical Cover",
      decoration: "electrics",
      displayPrice: {
        monthly: "£1.00",
        annual: `£12.00`,
      },
      price: {
        monthly: 1,
        annual: 12,
      },
      excess: "£60",
      selected: false,
      disabled: false,
    },
  ];

  window.getPrices = function (products) {
    let monthly = 0;
    let annual = 0;

    products.forEach((product) => {
      if (product.selected) {
        monthly = monthly + product.price.monthly;
        annual = annual + product.price.annual;
      }
    });

    let monthlyPrice = "";
    let annualPrice = "";

    if (monthly >= 1) {
      monthlyPrice = `£${monthly.toFixed(2)}`;
    } else {
      monthlyPrice = `${monthly * 100}p`;
    }

    if (annual >= 1) {
      annualPrice = `£${annual.toFixed(2)}`;
    } else {
      annualPrice = `${annual * 100}p`;
    }

    return {
      monthly: monthlyPrice,
      annual: annualPrice,
    };
  };

  window.appStore = function () {
    return {
      paymentMethod: "monthly",
      products,
    };
  };

  window.toggleSelection = function (products, id, paymentMethod) {
    products.forEach((product) => {
      if (product.id === id) {
        product.selected = !product.selected;
      }
    });
    price = getPrices(products);

    document.querySelector("#monthly-price-1").textContent = price.monthly;
    document.querySelector("#monthly-price-2").textContent = price.monthly;
    document.querySelector("#annual-price-1").textContent = price.annual;
    document.querySelector("#annual-price-2").textContent = price.annual;
  };
})();
