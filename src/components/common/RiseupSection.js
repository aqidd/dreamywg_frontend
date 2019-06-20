import styled from 'styled-components'

const RiseupSection = styled.section`
-webkit-animation: fade-in-right 2s;
@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`

export default RiseupSection