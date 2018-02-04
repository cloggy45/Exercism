def is_isogram(string):
    newString  = ''.join(string)
    print(newString)
    if string == "":
		return True
    for letter in newString:
		if newString.find(letter) == -1:
			return True
		else:
			return False	
