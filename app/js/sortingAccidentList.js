function sortingAccidentList(liElementsFromJson) {
	for (var i = 0; i < liElementsFromJson.length; i++)
	{
		var j = i;
		while (j!==0)
		{
			if (liElementsFromJson[j-1].delay < liElementsFromJson[j].delay)
			{
				swapLiElements(liElementsFromJson, j-1, j);
			}
			j--;
		}
	}
	return liElementsFromJson;
}

function swapLiElements(ulElement, startPosition, finishPosition) {
	var boofer;
	boofer = ulElement[finishPosition];
	ulElement[finishPosition] = ulElement[startPosition];
	ulElement[startPosition] = boofer;
}
