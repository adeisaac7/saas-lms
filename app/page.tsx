import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <main>
      <h1 className='text-primary'>Popular Companions</h1>
      <p className='text-lg text-gray-600 mb-10'>Meet your personalized tutors, available 24/7 to guide you through any subject.</p>


      <section className='home-section'>
        <CompanionCard
          id='123'
          name='Neural the Cognitive Guide'
          topic='Neuroscience Fundamentals'
          subject='Science'
          duration={45}
          color='#E5D0FF'
          />
        
        <CompanionCard
          id='456'
          name='Calculus the Math Mentor'
          topic='Differential & Integrals'
          subject='Maths'
          duration={30}
          color='#10B981'
          />
        
        <CompanionCard
          id='987'
          name='Lingua the Language Expert'
          topic='Advanced Vocabulary'
          subject='English'
          duration={10}
          color='#FFDA6E'
          />
        
      </section>

      <section className='home-section'>
        <CompanionList
          title='Recently completed sessions'
          companions={recentSessions}
          classNames='w-2/3 max-lg:w-full'
          />
        <Cta/>
      </section>
    </main>
  )
}

export default page