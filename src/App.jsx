import { styled } from 'styled-components'
import { urls } from './data'
import { useState } from 'react'

function App() {
  const [url, setUrl] = useState(urls[0])
  const [loading, setLoading] = useState(true)

  const onChangeUrl = (item) => {
    setLoading(true)
    setUrl(item)
  }

  return (
    <Wrapper>
      <Sidebar>
        {urls.map((item) => (
          <li
            className={url.url === item.url ? 'selected' : ''}
            key={item.url}
            onClick={() => onChangeUrl(item)}
          >
            {item.title}
          </li>
        ))}
      </Sidebar>
      <Iframe>
        <Loading loading={loading}>loading</Loading>
        <iframe src={url.url} onLoad={() => setLoading(false)}></iframe>
      </Iframe>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  background: #000;
  display: flex;
  width: 100vw;
  height: 100vh;
`
const Sidebar = styled.ul`
  width: 300px;
  padding: 20px 0;
  overflow-y: auto;
  color: #fff;
  li {
    list-style: none;
    padding: 8px 15px;
    border-bottom: 1px solid #333;
    font-size: 14px;
    cursor: pointer;

    &.selected {
      background: #333;
    }
  }
`
const Iframe = styled.div`
  flex-grow: 1;
  position: relative;
  iframe {
    border: none;
    width: 100%;
    height: 100vh;
  }
`
const Loading = styled.div`
  position: absolute;
  background: #000;
  width: 100%;
  height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s all;
  opacity: ${(props) => (props.loading ? '100%' : '0')};
  visibility: ${(props) => (props.loading ? 'visible' : 'hidden')};
`
