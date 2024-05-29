'use client'
import HostHeader from '@/components/Host/HostHeader.jsx'
import HostIntro from '@/components/Host/HostIntro.jsx'
import HostContent from '@/components/Host/HostContent.jsx'
import HostMessageButton from '@/components/Host/HostMessageButton.jsx'
import HostFooter from '@/components/Host/HostFooter.jsx'
import HostProfile from '@/components/Host/HostProfile.jsx'
import { useEffect, useState } from 'react'

const GenerateHostData = data => {
  return data.map(item => {
    return {
      user_id: item.user_id,
      post_id: item.post_id,
      index: item.index,
    }
  })
}

const GenerateHostProfileData = data => {
  return data.map(item => item.HostProfile)
}

const GenerateHostIntroData = data => {
  return data.map(item => item.HostIntro)
}

const GenerateHostContentData = data => {
  return data.map(item => item.HostContent)
}

const Host = () => {
  const [hostData, setHostData] = useState([])
  const [hostProfileData, setHostProfileData] = useState([])
  const [hostIntroData, setHostIntroData] = useState([])
  const [hostContentData, setHostContentData] = useState([])

  useEffect(() => {
    fetch('/api/host')
      .then(response => response.json())
      .then(data => {
        setHostData(GenerateHostData(data))
        setHostProfileData(GenerateHostProfileData(data))
        setHostIntroData(GenerateHostIntroData(data))
        setHostContentData(GenerateHostContentData(data))
      })
      .catch(error => console.error('Error fetching host.json:', error))
  }, [])

  if (!hostData || hostData.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className='flex justify-center px-10'>
      <div className='flex-col max-w-7xl'>
        <div>
          <HostHeader />
        </div>
        <div className='flex items-center justify-center bg-hostColor rounded-2xl flex-auto mx-auto'>
          <div className='pt-10 pb-6'>
            <div className='flex flex-col px-20 lg:flex-row gap-8 lg:gap-12 lg:px-10 justify-start items-center'>
              <div className='flex flex-col lg:gap-8 '>
                {hostProfileData.length > 0 && (
                  <HostProfile
                    name={hostProfileData[0].name}
                    superHost={hostProfileData[0].superHost}
                    review={hostProfileData[0].review}
                    rating={hostProfileData[0].rating}
                    career={hostProfileData[0].career}
                  />
                )}
                <div className='flex flex-col w-[341px] mt-4 lg:mt-0 gap-4'>
                  {hostIntroData.length > 0 &&
                    hostIntroData[0].map(({ category, text }, index) => {
                      if (index > 1) {
                        return null
                      }
                      return (
                        <HostIntro category={category} text={text} key={`${category}-${index}`} />
                      )
                    })}
                </div>
              </div>
              <div className='flex flex-col w-[341px] gap-8 lg:w-2/3 lg:gap-8 '>
                {hostContentData.length > 0 &&
                  hostContentData[0].map(({ title, body }, index) => {
                    return <HostContent title={title} body={body} key={`${title}-${index}`} />
                  })}
                <HostMessageButton />
                <HostFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Host
