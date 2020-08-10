import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';

const HomePage = () => {
  const router = useRouter()
  return <Button color="primary" onClick={() => router.replace('/event/new')}>Hello World</Button>
}

export default HomePage
