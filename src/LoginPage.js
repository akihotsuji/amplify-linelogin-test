import { React,useEffect } from 'react';
import { Auth,Hub } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { HeroLayout2 } from './ui-components';

function LoginPage() {
    const navigate = useNavigate();
  
    useEffect(() => {
        const listener = (data) => {
          if (data.payload.event === 'signIn') {
            navigate('/login');
          }
        };
      
        // Hub.listenは削除するための関数を返します
        const removeListener = Hub.listen('auth', listener);
      
        // 削除するための関数を呼び出します
        return () => removeListener();
      }, [navigate]);
  
    function signInWithLine() {
      Auth.federatedSignIn({ provider: 'LINE' });
    }

  return (
    <div className="App">
      <HeroLayout2 overrides={{ Button: { onClick: signInWithLine } }} />
    </div>
  );
}

export default LoginPage;