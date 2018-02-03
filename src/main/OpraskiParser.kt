package main

class OpraskiParser {
    companion object {

        fun getOpraskiString(message: String): String {
            val mapped1 =
                applyMap(message.toLowerCase(), firstMap)

            var arr = ArrayList(mapped1.split(Regex("\\s+")))
            arr = editWords(arr)
            val builder = StringBuilder()
            for (word in arr) {
                builder.append(word)
                builder.append(' ')
            }

            return applyMap(builder.toString(), secondMap)
        }

        private val firstMap = mapOf(
            "ie" to "je",
            "mě" to "mně",
            "js" to "s",
            "mně" to "mě",
            "ch" to "hc",
            "m" to "n",
            "n" to "m",
            "i" to "y",
            "y" to "i",
            "s" to "z",
            "z" to "s",
            "ž" to "š",
            "š" to "ž",
            "b" to "p",
            "p" to "b",
            "v" to "f"
        )

        private val secondMap = mapOf(
            "k" to "g"
        )

        private fun applyMap(message: String, map: Map<String, String>): String {
            val builder = StringBuilder()

            var i = 0
            loop@ while (i < message.length) {
                for ((key, value) in map.entries) {
                    val sub: String =
                        if (i + key.length < message.length)
                            message.substring(i, i + key.length)
                        else
                            message.substring(i)

                    if (sub == key) {
                        builder.append(value)
                        i += key.length
                        continue@loop
                    }
                }
                builder.append(message[i++])
            }
            return builder.toString()
        }

        private fun editWords(arr: ArrayList<String>): ArrayList<String> {
            fun connectPrepositions(i: Int){
                arr[i + 1] = arr[i] + arr[i + 1]
                arr.removeAt(i)
            }

            fun changeEnding(i: Int){
                arr[i] = arr[i].substring(0, arr[i].length - 1) + "í"
            }

            fun connectX(i: Int){
                arr[i] = arr[i].substring(0, arr[i].length - 1) + "x" + arr[i + 1].substring(1)
                arr.removeAt(i + 1)
            }
            fun addHookBefore(char: String, rep: String, i: Int){
                val index = arr[i].indexOf(char)
                when(arr[i][index-1]){
                    'd' -> arr[i] = arr[i].substring(0, index-1) + 'ď' + rep + arr[i].substring(index+1)
                    't' -> arr[i] = arr[i].substring(0, index-1) + 'ť' + rep + arr[i].substring(index+1)
                    'n' -> arr[i] = arr[i].substring(0, index-1) + 'ň' + rep + arr[i].substring(index+1)
                }
            }

            var i = 0
                while (i < arr.size) {
                    if (arr[i].length == 1 && i != arr.lastIndex) connectPrepositions(i)

                    if (arr[i].endsWith("é")) changeEnding(i)

                    if (arr[i].endsWith("k") &&
                        (arr[i + 1].startsWith("s") || arr[i + 1].startsWith("z"))
                    ) connectX(i)

                    if(arr[i].indexOf("ě") > 0){
                        addHookBefore("ě","e", i)
                    }

                    if(arr[i].indexOf("í") > 0){
                        addHookBefore("í","í", i)
                    }
                i++
            }
            return arr
        }
    }
}