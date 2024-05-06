import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
  return (
    <div>
      {loading ? <div>....</div> : ""}
    </div>
  )
}

export default Loading
