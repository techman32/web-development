PROGRAM Task3(INPUT, OUTPUT);
USES
  DOS;
VAR
  Text: STRING;
BEGIN
  WRITELN('Content-Type: text\plain');
  WRITELN;
  Text := GETENV('QUERY_STRING');
  IF (POS('n', Text) = 1) AND (POS('a', Text) = 2) AND (POS('m', Text) = 3) AND (POS('e', Text) = 4) AND (POS('=', Text) = 5)
  THEN
    BEGIN
      DELETE(Text, 1, 5);
      WRITELN('Hello dear, ', Text)
    END
  ELSE
    WRITELN('Hello Anonymous')
END.


