export default function CustomCalendar() {
  return (
    <div className="aspect-square h-[720px] w-full overflow-x-scroll lg:h-full">
      <iframe
        src="https://embed.styledcalendar.com/#bmU5KAjCRCAnaGZuVFld"
        title="Styled Calendar"
        className="styled-calendar-container h-full w-full overflow-x-scroll"       
        data-cy="calendar-embed-iframe"
      ></iframe>
      <script
        async
        type="module"
        src="https://embed.styledcalendar.com/assets/parent-window.js"
      ></script>
    </div>
  );
}

//CALENDARIO JIMENA 
// c_52a8099d5e40643984c12fa479d2c1532a429357fd679a952f2763ad759d469a@group.calendar.google.com