export const normalizarCouriers = (couriers) => {
  const {prices} = couriers;
  return prices
    ? prices.map(({cost, days, original_courier, volumetric_weight}, index) => {
        const dias = `${days} ${days > 1 ? 'dias' : 'día'}`;
        const costo = `$ ${cost}`;
        return Object.assign({
          key: index + 1,
          cost: costo,
          days: dias,
          original_courier,
          volumetric_weight,
          typeDelivery: 'Domicilio',
        });
      })
    : [];
};
