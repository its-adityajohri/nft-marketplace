import '../styles/All.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

const supportedChainIds = [4]
// 4 represents rinkby network, as I made this dapp before the, merge after the rinkby network is dropped so cahnge to goreli network 
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
