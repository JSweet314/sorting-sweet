start, i = 1;
current value is array[i] = array[1] = 2
let j = i - 1 = 0
since j >= 0 and array[j] > current value
   array[j + 1] = array[i] = array[j];
   j--
now, j is not >= 0
so, array[j + 1] = array[0] = previous j index = current value, i.e.
now, array looks like [2,4,5,3,1]

i = 2;
current value = array[i] = array[2] = 5;
j = i - 1 = 1;
now array[j] = 2 which is not greater than current value, so while loop is not entered
so nothing changes, array looks like [2,4,5,3,1]

i = 3;
current value = array[3] = 3;
j = i - 1 = 2;
since j >= 0 and array[j] = 5 and greater than current value (3), enter while loop
now array[j + 1] = array[3] = array[2], i.e. (24531) -> (24351)
j--
now j = 1 and  array[j] = array[1] = 4 which is still greater than current value (3);
so, now array[j + 1] = array[2] = array[1], i.e. (24351) -> (23451);
j--
now, j = 0 and array[j] = array[0] = 2 which is less than current value, so while loop is not entered
array[1] = current value;
(23451) -> (23451)

i = 4
current value = array[i] = array[4] = 1
j = i - 1 = 3;
since j >= 0 and array[j] = array[3] = 5 which is > current value, enter while loop;
array[j + 1] = array[4] = array[3]. ()