# Exercices list sorter

Simple JS algorithm (and basic interface) to randomly sort exercices based on list size and priority. Made to help on studying to tests.

[Access live tool](https://bassocelo.github.io/exercices-list/) <br>

### pattern of input:
> [list number (option)-][list size]["*" if is priorital list]

examples:
1. 12 13 16*
2. 12 5-22 14* 9-15*

### functionality
Priorital lists (*): Normal lists (without * at the end) generate sub-lists of size 2 to 6. Priorital lists generate sub-lists of size 7 to 14. 
