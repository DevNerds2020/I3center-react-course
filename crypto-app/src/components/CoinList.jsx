import { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/css';
import { coinData } from './coin-data';

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
  const defaultCoins = useRef([])
  const [coins, setCoins] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      console.log(response)
      const data = await response.json();
      setCoins(data);
      defaultCoins.current = data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchCrypto = (event) => {
    const newCoins = defaultCoins.current.filter(coin => coin.id.includes(event.target.value) || coin.symbol.includes(event.target.value))
    setCoins(newCoins)
  }

  if(coins.length ===0){
    return <>Loading </>
  }

  return (
    <div className={coinListStyle}>
      <h2>Cryptocurrency Prices</h2>
      <input onChange={searchCrypto}></input>
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
