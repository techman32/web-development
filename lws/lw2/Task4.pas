PROGRAM Task4(INPUT, OUTPUT);
USES
  DOS;
FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  _Pos, EndPos: INTEGER;
BEGIN
  _Pos := POS(Key + '=', GETENV('QUERY_STRING'));
  IF _Pos = 0
  THEN
    GetQueryStringParameter := 'Invalid Key'
  ELSE
    BEGIN
      _Pos := _Pos + LENGTH(Key) + 1;
      EndPos := _Pos;
      WHILE (EndPos <= LENGTH(GETENV('QUERY_STRING'))) AND (GETENV('QUERY_STRING')[EndPos] <> '&')
      DO
        EndPos := EndPos + 1;
      GetQueryStringParameter := COPY(GETENV('QUERY_STRING'), _Pos, EndPos - _Pos)
    END;
END;
BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END.


