import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CardDrinksDetails from './CardDrinksDetails';
import CardFoodsDetails from './CardFoodsDetails';

export default function CardDetails() {
  const { id } = useParams();
  const {
    location: { pathname },
  } = useHistory();

  if (pathname === `/bebidas/${id}`) {
    return (
      <div>
        <CardDrinksDetails />
      </div>
    );
  }
  return (
    <div>
      <CardFoodsDetails />
    </div>
  );
}
