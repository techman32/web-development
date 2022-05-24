PROGRAM Task2(INPUT, OUTPUT);
USES
  DOS;
BEGIN
  WRITELN('Content-Type: text\plain');
  WRITELN;
  IF GETENV('QUERY_STRING') = 'lanterns=1'
  THEN
    WRITELN('The British are coming by land.')
  ELSE
    IF GETENV('QUERY_STRING') = 'lanterns=2'
    THEN
      WRITELN('The British are coming by sea.')
    ELSE
      WRITELN('She doesn''t know where the will come from.')
      { WRITELN('The North Church shoows only: ', GetEnv('QUERY_STRING'), '.') }
END.


