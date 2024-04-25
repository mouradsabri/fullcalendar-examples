import Layout from '../components/layout'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'
import rrulePlugin from '@fullcalendar/rrule'

export default function CalendarPage() {
  return (
    <Layout>
      <div className='calendar-container'>
        <FullCalendar
          plugins={[
            resourceTimelinePlugin,
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
            rrulePlugin
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'resourceTimelineWeek,dayGridMonth,timeGridWeek'
          }}
          initialView='resourceTimelineWeek'
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          initialEvents={[
            
          ]}
          events={[
            {
              title: 'my recurring event',
              rrule: {
                freq: 'daily',
                byweekday:[0,1,2,3,4],
                dtstart: '2024-04-25T08:00:00',
              },
              duration: "02:00",
              exdate:['2024-05-22T08:00:00']
              
            },
            {
              title: ' cutom event',
              rrule: {
                freq: 'daily',
                dtstart: '2024-05-22T08:00:00',
                until: '2024-05-22T10:00:00',
                
              },
              duration:'02:00'
            }
          ]}
        />
      </div>
    </Layout>
  )
}
