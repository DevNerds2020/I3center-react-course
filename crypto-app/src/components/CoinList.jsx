import { useState, useEffect } from 'react';
import { css } from '@emotion/css';

const coinListStyle = css`
  padding: 20px;
`;

const coinItemStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const coinNameStyle = css`
  font-weight: bold;
`;

const priceStyle = css`
  margin-left: 20px;
`;

const CoinList = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={coinListStyle}>
      <h2>Cryptocurrency Prices</h2>
      <div>
        {coins.map((coin) => (
          <div key={coin.id} className={coinItemStyle}>
            <div className={coinNameStyle}>{coin.name}</div>
            <div className={priceStyle}>{coin.current_price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinList;
