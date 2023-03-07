import axios from "axios";
import { useEffect, useState } from "react";

interface IUserData {
    name?: string
  iconImg?: string
}

export function useUserData(token: string) {
      const [data, setData] = useState<IUserData>({})
  useEffect(() => {
    if (!token || token === "undefined") return;
    axios.get('https://oauth.reddit.com/api/v1/me',
      {
        headers: { Authorization: `bearer${token}` }
      })
      .then((resp) => {
          console.log(resp);
          
          const userData = resp.data;
          const icon = userData.icon_img.split('?')[0];
          console.log('userData-->>', userData);
          setData({ name: userData.name, iconImg: icon })
        })
        .catch(console.log)
  }, [token])
      console.log('useUserData dataFunction ---> ', data)

    return [data]
}