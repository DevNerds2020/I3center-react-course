import { useParams, useLocation } from "react-router-dom";
import {useEffect} from 'react'

const CoinDetails = () => {
  const { coinId } = useParams()
  const location = useLocation()

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);      
      const data = await response.json();
      console.log("%c Line:12 🍅 data", "color:#6ec1c2", data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location])

  console.log("%c Line:5 🥛 params", "color:#e41a6a", coinId);
  return (
    <div>CoinDetails</div>
  )
}

export default CoinDetails